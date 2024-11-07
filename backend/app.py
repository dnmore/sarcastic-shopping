from flask import Flask, jsonify, request;
from flask_restful import Api, Resource
from flask_cors import CORS, cross_origin

from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy import Integer, String
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import os
from dotenv import load_dotenv

load_dotenv()


app = Flask(__name__)

class Base(DeclarativeBase):
    pass


app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DB_URI','sqlite:///users.db') 
app.config['JWT_SECRET_KEY'] = os.getenv('JWT_SECRET_KEY')
db = SQLAlchemy(model_class=Base)
db.init_app(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)
api = Api(app)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})


products = [
    {
      "id": 1,
      "name": "The Hipster's Dream: Rotary Nostalgia",
      "category": "Nostalgic Nonsense",
      "description":
        "Because texting is overrated and who doesn't love the thrill of dialing a number for five minutes only to be hung up on?",
      "price": 349.99,
      "imageUrl": "https://t.ly/lJB0H",
    },
    {
      "id": 2,
      "name": "Nature's Perfectly Packaged Blandness",
      "category": "Luxuriously Useless",
      "description":
        "When you want a snack that screams mediocrity, grab a banana! It’s yellow, it’s mushy, it’s predictably uninspiring.",
      "price": 6.49,
      "imageUrl": "https://t.ly/IPbZk",
    },
    {
      "id": 3,
      "name": "The Ultimate Diet Dessert",
      "category": "Luxuriously Useless",
      "description":
        "Satisfy your sweet tooth with absolutely no calories! Perfect for those who love the idea of ice cream but hate the joy of eating it.",
      "price": 12.00,
      "imageUrl": "https://rb.gy/rrc9eq",
    },
    {
      "id": 4,
      "name": "Breakfast of Existential Dread",
      "category":"Quirkily Comforting",
      "description":
        "Start your morning with a side of melancholy. This egg knows it has no future, just like your Monday meetings.",
      "price": 2.75,
      "imageUrl": "https://t.ly/NL4hN",
    },
    {
      "id": 5,
      "name": "The Loving Touch: Prickly Edition",
      "category": "Luxuriously Useless",
      "description":
        "Because nothing says tender affection like plastic fingers caressing a spiky plant. Perfect for those into painful relationships.",
      "price": 89.99,
      "imageUrl": "https://t.ly/kboX-",
    },
    {
      "id": 6,
      "name": "Loud and Proud in Traffic Cone Orange",
      "category": "Nostalgic Nonsense",
      "description":
        "For when you need to yell at people from a distance, but also want to be visible from space. Subtlety not included.",
      "price": 199.00,
      "imageUrl": "https://rb.gy/945rmg",
    },
    {
      "id": 7,
      "name": "Double the Redundant Fun",
      "category": "Quirkily Comforting",
      "description":
        "Twice the cherries, twice the smugness. Enjoy these show-offs that remind you how single you really are with every juicy bite.",
      "price": 14.99,
      "imageUrl": "https://tinyurl.com/mw9jwbed",
    },
    {
      "id": 8,
      "name": "The Ultimate Artisanal Sucker",
      "category": "Luxuriously Useless",
      "description":
        "Experience the height of pretension with a lollipop that's too fancy to be handheld. Because your sweets deserve a seat at the table.",
      "price": 23.50,
      "imageUrl":
        "https://t.ly/wl_JW",
    },
  ]


class ProductList(Resource):
    def get(self):
        return jsonify(products)
    
api.add_resource(ProductList, '/products')   

class User(db.Model):
    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    firstName: Mapped[str] = mapped_column(String(80), nullable=False)
    lastName: Mapped[str] = mapped_column(String(80), nullable=False)
    email: Mapped[str] = mapped_column(String(80), unique=True, nullable=False)    
    password: Mapped[str] = mapped_column(String(200), nullable=False) 

with app.app_context():
    db.create_all()
    

    
@app.route('/register', methods=['POST'])
@cross_origin()
def register():
  
  data = request.json
  firstName = data.get('firstName')
  lastName = data.get('lastName')
  email = data.get('email')
  password = data.get('password')
  
  existing_user = User.query.filter_by(email=email).first()
  
  if existing_user:
    
    return jsonify({"message": "This email account already exists!"}), 409
  
  hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
  new_user = User(firstName=firstName, lastName=lastName, email=email, password=hashed_password)
  db.session.add(new_user)
  db.session.commit()
  
  return jsonify({"message":"Registered successfully!"}), 201


@app.route('/login', methods=['POST'])
def login():
  data = request.json
  email = data.get('email')
  password = data.get('password')
  
  user = User.query.filter_by(email=email).first()
  
  
  if user and bcrypt.check_password_hash(user.password, password):
    access_token = create_access_token(identity=user.id)
    return jsonify(access_token=access_token), 200
  else:
    return jsonify({"message": "Invalid email or password"}), 401
  
@app.route('/checkout', methods=['GET'])
@jwt_required()
def checkout():
  current_user_id = get_jwt_identity()
  user = User.query.get(current_user_id)
  return jsonify(logged_in_as=user.firstName), 200
  
      
if __name__ == '__main__':
    app.run(debug=True)

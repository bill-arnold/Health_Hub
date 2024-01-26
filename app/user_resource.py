from flask_restful import Resource, reqparse
#from flask_jwt_extended import jwt_required, create_access_token
from models import db, User
from schema import UserSchema
from flask import jsonify,Response
#from flask_bcrypt import Bcrypt


user_schema = UserSchema()
users_schema = UserSchema(many=True)

class UserResource(Resource):
    #@jwt_required()
    def get(self, user_id):
        user = User.query.get_or_404(user_id)
        return jsonify(user_schema.dump(user))

    #@jwt_required()
    def put(self, user_id):
        user = User.query.get_or_404(user_id)
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str)
        parser.add_argument('email', type=str)
        parser.add_argument('password', type=str)
        args = parser.parse_args()

        # Update user attributes if provided, or keep the existing values
        user.username = args.get('username', user.username)
        user.email = args.get('email', user.email)
        user.password = args.get('password', user.password)

        db.session.commit()
        return jsonify(user_schema.dump(user))

   # @jwt_required()
    def delete(self, user_id):
        user = User.query.get_or_404(user_id)
        db.session.delete(user)
        db.session.commit()

        # Returning an empty response with status code 204
        return '', 204

class UsersResource(Resource):
   # @jwt_required()
    def get(self):
        users = User.query.all()
        return jsonify(users_schema.dump(users))

    #@jwt_required()
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str, required=True)
        parser.add_argument('email', type=str, required=True)
        parser.add_argument('password', type=str, required=True)
        args = parser.parse_args()

        #hashed_password = bcrypt.generate_password_hash(args['password']).decode('utf-8')

        new_user = User(username=args['username'], email=args['email'], password=args['password'])
        db.session.add(new_user)
        db.session.commit()

        # Create JWT token for the new user
       # access_token = create_access_token(identity=new_user.user_id)
        #return jsonify({"access_token": access_token, "user": user_schema.dump(new_user)}), 201

#class UserLoginResource(Resource):
    #@jwt_required()
    #def post(self):
        #parser = reqparse.RequestParser()
        #parser.add_argument('username', type=str, required=True)
        #parser.add_argument('password', type=str, required=True)
        #args = parser.parse_args()

       
        #user = User.query.filter_by(username=args['username']).first()
       # print(f"Received username: {args['username']}, password: {args['password']}")
        #if args['username'] == user.username and args['password'] == user.password:
        #if user and bcrypt.check_password_hash(user.password, args['password']):
            
            #access_token = create_access_token(identity=user.user_id)
           # print(f"Access token generated: {access_token}")
            #return {"access_token": access_token}, 200
        #else:
            #print("Invalid credentials")
            #return {"msg": "Invalid credentials"}, 401

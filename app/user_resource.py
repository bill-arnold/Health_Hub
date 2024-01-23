from flask_restful import Resource, reqparse
from models import db, User
from schema import UserSchema

user_schema = UserSchema()
users_schema = UserSchema(many=True)

class UserResource(Resource):
    def get(self, user_id):
        user = User.query.get_or_404(user_id)
        return user_schema.jsonify(user)

    def put(self, user_id):
        user = User.query.get_or_404(user_id)
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str)
        parser.add_argument('email', type=str)
        parser.add_argument('password', type=str)
        args = parser.parse_args()

        # Update user attributes
        user.username = args['username'] or user.username
        user.email = args['email'] or user.email
        user.password = args['password'] or user.password

        db.session.commit()
        return user_schema.jsonify(user)

    def delete(self, user_id):
        user = User.query.get_or_404(user_id)
        db.session.delete(user)
        db.session.commit()
        return '', 204

class UsersResource(Resource):
    def get(self):
        users = User.query.all()
        return users_schema.jsonify(users)

    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str, required=True)
        parser.add_argument('email', type=str, required=True)
        parser.add_argument('password', type=str, required=True)
        args = parser.parse_args()

        new_user = User(username=args['username'], email=args['email'], password=args['password'])
        db.session.add(new_user)
        db.session.commit()
        return user_schema.jsonify(new_user), 201

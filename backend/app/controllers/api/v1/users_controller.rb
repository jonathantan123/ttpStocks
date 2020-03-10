class Api::V1::UsersController < ApplicationController

    def index 
        users = User.all
        debugger

        render json: users
        
    end 


end 

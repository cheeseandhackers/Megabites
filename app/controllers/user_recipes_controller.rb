class UserRecipesController < ApplicationController
    def create
        @user_recipe = UserRecipe.new(recipe_id:user_recipe_params[:id], user_id:current_user.id)
    
        respond_to do |format|
          if @user_recipe.save
            format.json {render json: {}, status: :created }
          else
            format.json { render json: @user_recipe.errors, status: :unprocessable_entity }
          end
        end
      end

      def index
        @user_recipes = UserRecipe.where(user_id:current_user.id)
          respond_to do |format|
            format.json {render :json => @user_recipes, :include => {:recipe => {:only => :title}}, status: :ok}
          end
      end

      def destroy
        @user_recipe = UserRecipe.find(params[:id])
        @user_recipe.destroy
        render json: @user_recipe
      end


private
    def user_recipe_params
        params.fetch(:user_recipe).permit(:id)
    end
end
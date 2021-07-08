class User < ApplicationRecord
  has_many :user_recipes
  has_many :recipes, through: :user_recipes
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end

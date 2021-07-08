class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :image
      t.text :ingredients
      t.text :instructions
      t.integer :ready_in_minutes
      t.integer :cooking_minutes
      t.string :diet_type

      t.timestamps
    end
  end
end

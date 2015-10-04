class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.string :author
      t.string :year
      t.string :coop
      t.text :text

      t.timestamps null: false
    end
  end
end

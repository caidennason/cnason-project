class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :content
      t.string :photo
      t.string :date
      t.integer :user_id
      t.integer :establishment_id

      t.timestamps
    end
  end
end

class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :photo
      t.string :location
      t.string :string
      t.string :bio

      t.timestamps
    end
  end
end

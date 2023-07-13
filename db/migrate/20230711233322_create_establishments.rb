class CreateEstablishments < ActiveRecord::Migration[6.1]
  def change
    create_table :establishments do |t|
      t.string :name
      t.string :photo
      t.string :type
      t.string :location
      t.string :bio
      t.boolean :allows_dogs

      t.timestamps
    end
  end
end

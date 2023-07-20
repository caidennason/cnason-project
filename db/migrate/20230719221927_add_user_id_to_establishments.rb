class AddUserIdToEstablishments < ActiveRecord::Migration[6.1]
  def change
    add_column :establishments, :user_id, :integer
  end
end

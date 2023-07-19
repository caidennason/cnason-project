class RenameColumnInEstablishments < ActiveRecord::Migration[6.1]
  def change
    rename_column :establishments, :type, :establishment_type
  end
end

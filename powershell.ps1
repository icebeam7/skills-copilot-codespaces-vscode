# Import the Azure module
Import-Module Az

# Define variables
$resourceGroupName = "myResourceGroup"
$storageAccountName = "mystorageaccount$(Get-Random)"
$location = "EastUS"

# Login to Azure
Connect-AzAccount

# Create the resource group if it doesn't exist
if (-Not (Get-AzResourceGroup -Name $resourceGroupName -ErrorAction SilentlyContinue)) {
    New-AzResourceGroup -Name $resourceGroupName -Location $location
}

# Create the storage account
$storageAccount = New-AzStorageAccount -ResourceGroupName $resourceGroupName -Name $storageAccountName -Location $location -SkuName Standard_LRS

# Output the storage account details
$storageAccount
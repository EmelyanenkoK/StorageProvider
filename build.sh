func -SPA -o storage-contract-code.fif storage_contract.func
echo "\"storage-contract-code.fif\" include boc>B \"storage-contract-code.boc\" B>file" | fift
func -SPA -o storage-contract-fabric.fif main.func

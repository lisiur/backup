date=$( date +%Y-%m-%d )
echo $@ | xargs -n1 -I @ cp @ "${date}_"@
current_timestamp=$(date +%s)
tomorrow_timestamp=$((current_timestamp + 86400))
tomorrow_date=$(date -r $tomorrow_timestamp -u +"%Y-%m-%d")
echo "tomorrow's date is $tomorrow_date"
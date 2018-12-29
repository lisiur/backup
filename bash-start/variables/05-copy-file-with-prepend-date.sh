date=$( date +%Y-%m-%d )
basename=$(basename -- $1)
extension="${basename##*.}"
filename="${basename%.*}"
cp $1 "${filename}_${date}.${extension}"
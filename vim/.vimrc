let mapleader=","
set nocompatible              " be iMproved, required
filetype off                  " required
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'VundleVim/Vundle.vim'
Plugin 'tpope/vim-fugitive'
Plugin 'git://git.wincent.com/command-t.git'
Plugin 'rstacruz/sparkup', {'rtp': 'vim/'}

" MY-OWN-PLUGINS
Plugin 'tmhedberg/SimpylFold'
Plugin 'vim-scripts/indentpython.vim'
Plugin 'Valloric/YouCompleteMe'
Plugin 'scrooloose/syntastic'
Plugin 'nvie/vim-flake8'
Plugin 'scrooloose/nerdtree'
Plugin 'jistr/vim-nerdtree-tabs'
Plugin 'kien/ctrlp.vim'
Plugin 'easymotion/vim-easymotion'
Plugin 'Lokaltog/vim-powerline'
Plugin 'jiangmiao/auto-pairs'

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required

" MY-OWN-CONFIG
syntax on
set number
set encoding=utf-8
set clipboard=unnamed
set backspace=2
let NERDTreeIgnore=['\.pyc$', '\~$'] " ignore files in NERDTree

" quick command in insert mode
inoremap ;; <Esc>
inoremap II <Esc>I
inoremap AA <Esc>A
inoremap OO <Esc>O
inoremap CC <Esc>C
inoremap SS <Esc>S
inoremap DD <Esc>dd
inoremap UU <Esc>u
inoremap WW <Esc>:w<ENTER>
inoremap ZZ <Esc>:wq<ENTER>
inoremap :wq <Esc>:wq<ENTER>

" split navigations
nnoremap <C-J> <C-W><C-J>
nnoremap <C-K> <C-W><C-K>
nnoremap <C-L> <C-W><C-L>
nnoremap <C-H> <C-W><C-H>

" Enable folding
set foldmethod=indent
set foldlevel=99
" Enable folding with the spacebar
nnoremap <space> za
let g:SimpylFold_docstring_preview=1

" Force the cursor onto a new line after 80 characters
set textwidth=80
" In Git commit messages, make it 72 characters
autocmd FileType gitcommit set textwidth=72
" Colour the 81st (or 73rd) column so that we don’t type over our limit
set colorcolumn=+1
" In Git commit messages, also colour the 51st column (for titles)
autocmd FileType gitcommit set colorcolumn+=51


au BufNewFile,BufRead *.py 
			\  set tabstop=4 
			\| set softtabstop=4 
			\| set shiftwidth=4 
au BufNewFile,BufRead *.js 
			\  set tabstop=2 
			\| set softtabstop=2 
			\| set shiftwidth=2
au BufNewFile,BufRead *.rb 
			\  set tabstop=2 
			\| set softtabstop=2 
			\| set shiftwidth=2

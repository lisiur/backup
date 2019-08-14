module Chp3 where

import           Data.List

-- 写一个函数，用来计算一个列表元素的个数．出于测试要求，保证其输出的结果和标准函数 length 保持一致．
length' :: [a] -> Int
length' []       = 0
length' (x : xs) = 1 + length' xs

-- 写一个函数，用来计算列表的平均值，即，列表元素的总和除以列表的长度．(你可能需要用到 fromIntegral 函数将列表长度变量从 integer 类型到 float 类型进行转换．)
avg' :: [Int] -> Double
avg' xs = fromIntegral (sum xs) / fromIntegral (length' xs)

-- 将一个列表变成回文序列，即，他应该读起来完全一样，不管是从前往后还是从后往前．举个例子，考虑一个列表 [1,2,3]，你的函数应该返回 [1,2,3,3,2,1]．
makePalindrome ls = ls ++ reverse ls

--写一个函数，用来确定他的输入是否是一个回文序列．
judgePalindrome :: String -> Bool
judgePalindrome c = c == reverse c

-- 创造一个函数，用于排序一个包含许多列表的列表，其排序规则基于他的子列表的长度．（你可能要看看 Data.List 模块的 sortBy 函数．）
sortList :: [[a]] -> [[a]]
sortList = sortBy (\a b -> compare (length a) (length b))

-- 定义一个函数，其用一个分隔符将一个包含许多列表的列表连接在一起．函数类型定义如下：
intersperse' :: a -> [[a]] -> [a]
intersperse' s [] = []
intersperse' s (xs : xss) | null xss  = xs
                          | otherwise = xs ++ [s] ++ intersperse' s xss

-- 使用我们在前面章节中定义的二叉树类型，写一个函数用于确定一棵二叉树的高度．高度的定义是从根节点到叶子节点经过的最大节点数．举个例子，Empty 这棵树的高度是0; Node "x" Empty Empty 这棵树的高度是1; Node "x" Empty (Node "y" Empty Empty) 这棵树的高度是2;依此类推.
data Tree a = Node a (Tree a) (Tree a)
            | Empty

getTreeHeight :: Tree a -> Int
getTreeHeight Empty = 0
getTreeHeight (Node node left right) =
    max (getTreeHeight left) (getTreeHeight right) + 1

-- 考虑三个二维的点 a, b，和c．如果我们观察沿着线段ＡＢ（由a,b节点组成）和线段ＢＣ（由b,c节点组成）形成的角度，它或者转向（turn）左边，或者转向右边，或者组成一条直线．定义一个 Direction（方向）的数据类型反映这些可能的情况．
data Direction = Left | Right | Line

-- 写一个函数，用于计算三个二维坐标点组成的转向（turn），并且返回其 Direction（方向）．
-- 使用角平分线

-- 定义一个函数，输入二维坐标点的序列并计算其每个连续三个的（方向）Direction．考虑一个点的序列 [a,b,c,d,e]，他应该开始计算 [a,b,c]的转向(turn), 接着计算 [b,c,d]的转向，再是[c,d,e]的．你的函数应该返回一个Direction（方向）的序列．

-- 运用前面三个练习的代码，实现 Graham 扫描算法，用于扫描由二维点集构成的凸包．你能从 `Wikipedia<http://en.wikipedia.org/wiki/Convex_hull>`_ 上找到＂什么是凸包＂，以及 `＂Graham扫描算法＂<http://en.wikipedia.org/wiki/Graham_scan>`_ 的完整解释．


type CustomerID = Int
type ReviewBody = String
data BookInfo = Book Int String [String]
                deriving (Show)

data BetterReview = BetterReview BookInfo CustomerID ReviewBody
                    deriving (Show)

data BetterReview' = BetterReview' {
  bookInfo :: BookInfo,
  customerID :: CustomerID,
  reviewBody :: ReviewBody
} deriving (Show)

type CardHolder = String
type CardNumber = String
type Address = [String]
data BillingInfo = CreditCard CardNumber CardHolder Address
                 | CashOnDelivery
                 | Invoice CustomerID

instance Show BillingInfo where
  show (CreditCard cardNumber cardHolder address) = "CreditCard lalala"
  show CashOnDelivery = "hahaha"
  show (Invoice customerID) = "lalala"

review = BetterReview' {
  bookInfo = Book 3 "lisiur" ["Lisiur Day"],
  customerID = 3,
  reviewBody = "good"
}


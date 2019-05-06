#[derive(Debug)]
struct User {
    username: String,
    email: String,
    active: bool,
    sign_in_count: u64,
}

#[derive(Debug)]
struct Rectangle {
    width: u32,
    height: u32,
}

#[derive(Debug)]
enum IpAddr {
    V4(u32, u32, u32, u32),
    V6(String),
}

#[derive(Debug)]
enum RMB {
    YiBaiYuan,
    WuShiYuan,
    ShiYuan,
}

impl RMB {
    fn to_yuan(&self) -> u32 {
        match self {
            RMB::YiBaiYuan => 100,
            RMB::WuShiYuan => 50,
            RMB::ShiYuan => 10,
        }
    }
}

impl Rectangle {
    fn area(&self) -> u32 {
        self.height * self.width
    }
}

fn main() {
    let mut x = 5;
    println!("The value of x is: {}", x);
    x = 6;
    println!("The value of x is: {}", x);
    let guess: u32 = "42".parse().expect("");
    println!("{}", guess);
    another_function();
    println!("{}", five());

    let guess  = loop {
        break 2;
    };
    println!("{}", guess);

    let a = [10, 20, 30, 40, 50];
    for element in a.iter() {
        println!("{}", element)
    }
    for number in (1..=4).rev() {
        println!("{}", number)
    }
    let s = String::from("hello world");
    let word = first_word(&s);
    println!("{:?}", word.chars().nth(0));
    let user = User {
        username: String::from("lisiur"),
        email: String::from("lisiurday@gmail.com"),
        active: true,
        sign_in_count: 1,
    };
    println!("{:#?}", user);
    let rect1 = Rectangle { width: 30, height: 40 };
    println!(
        "The area of the rectangle is {} square pixels.",
        rect1.area()
    );
    let ip_addr_v4 = IpAddr::V4(127, 0, 0, 1);
    let ip_addr_v6 = IpAddr::V6(String::from("::0"));
    println!("{:?}", ip_addr_v4);
    println!("{:?}", ip_addr_v6);

    println!("{}", RMB::YiBaiYuan.to_yuan());
    println!("{}", RMB::WuShiYuan.to_yuan());
    println!("{}", RMB::ShiYuan.to_yuan());
}

fn another_function() {
    println!("Another function.")
}

fn five() -> i32 {
    5
}

fn first_word(s: &String) -> &str {
    let bytes = s.as_bytes();

    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[0..i];
        }
    }

    &s[..]
}
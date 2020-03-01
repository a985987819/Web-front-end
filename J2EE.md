**ORM:O:对象  
R:关系  
M:映射**


JDBC开发，表(二维水平的行row,垂直的列column)平面
面向对象：对象-->(属性、方法)

# ORM三级映射原则
1. 一张数据库的表对应一个类
users<=>users类(实体类)
1.  一行记录对应一个对象
   users表的一行记录<=>Users类的一个对象
2. 一个列（字段）对应一个属性，类型相匹配，名称相一致

    eg. name(varchar)->name(String)



            users(id,name,pwd,phone,email,address,born_date(datetime))
            class Users{
                int id;
                String name;
                String pwd;
                String phone;
                String email;
                String address;
                java.util.Date
                //set、get
            }

ORM,两张表之间的关系:
A、B之间的关系
1. 一对一
3. 多对一
   
   一对多
2. 多对多
   

*两张表不能直接多对多*

两张表的一对多关系是通过外键实现的
外键应该在多的一端

a(k id)     ,    b(id)

                 学生-  教师
        张三,kid=1  <-> 张老师
        李四,kid=1  <-> 张老师
---
        class A{
            int kid;
            B b;
        }
---
        class B{
            int id;
            Set <A> sets = {"张三","李四"}
        }

### 事务

**事务：显示的控制事务，jdbc隐式地开启和关闭了事务**

1. 原子性

   最小执行单位，不可再分割

   eg.	买家-100，卖家+100，同时进行，否则*回滚(rooback)*

2. 隔离性

   进行中，查询多余余额

3. 持久性

   完成，查询多余余额

4. 一致性

   总额不变        

   1100：   1100      0成功

   1100:      1000       100失败







## 1.  Junit使用步骤

1. 创建测试目录（Src、测试目录是test）

2. 在测试目录test中创建于src相同的包名(实体类不需要测试,dao层需要)

3. 为需要测试的类创建测试类,eg.UserMapper,测试类是UserMapperTest

4. 为被测试类（UsersMapper）中需要测试的方法在测试类中创建相应的方法。比如，需要测试findById方法，那么测试类中创建findById方法，

   测试方法的要求

   1. 不能有返回值、不能有参数
   2. 需要只用@Test注解对该方法进行注解 


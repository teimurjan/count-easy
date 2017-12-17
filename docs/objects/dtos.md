# Exceptions

## Table of Contents
- [User](#User)
- [Payment](#Payment)
- [Category](#Category)

* #### <a name="User"></a>User
    ```
    {
        id: UUID
        login: string
        password: string    
    }
    ```
* #### <a name="Payment"></a>Payment
    ```
    {
        id: UUID
        amount: number
        category: Category
        user: User
    }
    ```
* #### <a name="Category"></a>Category
    ```
    {
        id: UUID
        name: string
    }
    ```

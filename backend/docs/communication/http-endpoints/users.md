# Users API endpoints

## Table of Contents:
- [login](#login)
- [register](#register)

## Login
 <_It logins in the systen_>
 * ##### URL
  
 api/users/login
 
 * ##### Method
 
 POST
 
 * ##### Data Params
 
 ```
 {
    login: string
    password: string
 }
 ```
 
 * ##### Success Response
    **Code**: 200
    
    **Content**: 
    ```
    {
        token: string
    }
    ```

 * ##### Error Response
    [HttpBadRequestException][HTTP_BAD_REQUEST_EXCEPTION]
    
    or
    
    [UnauthorizedHttpException][UNAUTHORIZED_HTTP_EXCEPTION]



## Register
 <_It creates a new user_>
 * ##### URL
  
 api/users/register
 
 * ##### Method
 
 POST
 
 * ##### Data Params
 
 ```
 {
    login: string
    password: string
 }
 ```
 
 * ##### Success Response
    **Code**: 200
    
    **Content**: 
    ```
    {
        token: string
    }
    ```

 * ##### Error Response
    [ConflictHttpException][CONFLICT_HTTP_EXCEPTION]
 
 [HTTP_BAD_REQUEST_EXCEPTION]: ../../objects/exceptions.md#HttpBadRequestException
 [UNAUTHORIZED_HTTP_EXCEPTION]: ../../objects/exceptions#UnauthorizedHttpException
 [CONFLICT_HTTP_EXCEPTION]: ../../objects/exceptions#ConflictHttpException
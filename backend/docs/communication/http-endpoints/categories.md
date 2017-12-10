# Categories API endpoints

## Table of Contents:
- [Get categories](#get-categories)
- [Create a new payment](#create-a-new-payment)

## Get Categories
 <_It retrieves all categories_>
 * ##### URL
  
 api/categories/
 
 * ##### Method
 
 GET
 
 * ##### Success Response
    **Code**: 200
    
    **Content**: 
   [[Category][CATEGORY]]


## Create a new category
 <_It creates a new category_>
 * ##### URL
  
 api/categories/
 
 * ##### Method
 
 POST
 
 * ##### Data Params
 
 ```
 {
    name: string
 }
 ```
 
 * ##### Success Response
    **Code**: 200
    
    **Content**: 
    [Category][CATEGORY]

 [HTTP_BAD_REQUEST_EXCEPTION]: ../../objects/exceptions.md#HttpBadRequestException
 [CATEGORY]: ../../objects/dtos.md#Category

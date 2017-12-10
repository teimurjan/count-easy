# Payments API endpoints

## Table of Contents:
- [Get payments](#get-payments-by-user)
- [Create a new payment](#create-a-new-payment)

## Get Payments By User ID
 <_It retrieves all payments for the current user(JWT)_>
 * ##### URL
  
 api/payments/
 
 * ##### Method
 
 GET
 
 * ##### Success Response
    **Code**: 200
    
    **Content**: 
   [[Payment][PAYMENT]]


## Create a new payment
 <_It creates a new payment_>
 * ##### URL
  
 api/payments/
 
 * ##### Method
 
 POST
 
 * ##### Data Params
 
 ```
 {
    amount: number
    categoryId: string
 }
 ```
 
 * ##### Success Response
    **Code**: 200
    
    **Content**: 
    [Payment][PAYMENT]

 [HTTP_BAD_REQUEST_EXCEPTION]: ../../objects/exceptions.md#HttpBadRequestException
 [PAYMENT]: ../../objects/dtos.md#Payment

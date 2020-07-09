## Server API

### Mortgage Information
  * GET `/api/homes/:id`

**Path Parameters:**
  * `id` listing id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
        "homeNum": "Number",
        "city": "String",
        "homePrice": "Number",
        "downPaymentRate": "Number",
        "homeIns": "Number",
        "interestRate": "Number",
        "propertyTaxRate": "Number",
    }
```

### Add restaurant
  * POST `/api/homes`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
        "homeNum": "Number",
        "city": "String",
        "homePrice": "Number",
        "downPaymentRate": "Number",
        "homeIns": "Number",
        "interestRate": "Number",
        "propertyTaxRate": "Number",
    }
```


### Update restaurant info
  * PATCH `/api/homes/:id`

**Path Parameters:**
  * `id` listing id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
        "homePrice": "Number",
        "downPaymentRate": "Number",
        "interestRate": "Number",
    }
```

### Delete restaurant
  * DELETE `/api/homes/:id`

**Path Parameters:**
  * `id` home id

**Success Status Code:** `204`
import Route from '@ioc:Adonis/Core/Route'

Route.resource('/products', 'ProductsController')
Route.resource('/categories', 'CategoriesController')
Route.get('/last-update', 'ProductsController.lastUpdate')

Route.get('/dolar', 'TaxesController.getCurrentDolar')

Route.post('/auth/login', 'AuthController.signIn')

Route.group(() => {
    Route.put('/taxes/many-values', 'TaxesController.setMany')
    Route.put('/taxes/:tax/set/:category', 'TaxesController.set')    
}).middleware('auth')

Route.resource('/taxes', 'TaxesController')
from django.urls import path
from . import views
urlpatterns = [
    path('categoria/listados/', views.CategoriaListado.as_view()),
    path('categoria/<int:pk>', views.CategoriaBuscaPorId.as_view()),
    path('produtos/registrar/', views.ProdutoRegistrar.as_view()),
    path('produtos/editar/<int:pk>', views.ProdutoEditar.as_view()),
    path('produtos/eliminar/<int:pk>', views.ProdutoEliminar.as_view()),
    path('produtos/listados/', views.ProdutoComDadosDaCategoriaAssociadoSerializer.as_view()),
    path('categoria/registrar/', views.CategoriaRegistrar.as_view()),
    path('categoria/editar/<int:pk>', views.CategoriaEditar.as_view()),
    path('categoria/eliminar/<int:pk>', views.CategoriaEliminar.as_view()),
]
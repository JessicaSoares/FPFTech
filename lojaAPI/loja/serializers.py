from rest_framework import serializers
from .models import(
    Produto,
    Categoria
)

class CategoriaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categoria
        fields = '__all__'

class ProdutoComDadosDaCategoriaAssociadoSerializer(serializers.ModelSerializer):

    categoria = CategoriaSerializer(read_only=True)
    class Meta:
        model = Produto
        fields = '__all__'


class ProdutoSerializer(serializers.ModelSerializer):

    class Meta:
        model = Produto
        fields = '__all__'





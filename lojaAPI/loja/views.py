from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import (
    Produto,
    Categoria,
)
from .serializers import(
    ProdutoSerializer,
    ProdutoComDadosDaCategoriaAssociadoSerializer,
    CategoriaSerializer,
)

class CategoriaListado(APIView):

    def get(self, request):
        categoria = Categoria.objects.all()
        serializer = CategoriaSerializer(categoria, many=True)
        return Response(serializer.data)

class CategoriaBuscaPorId(APIView):

    def get(self, request, pk):
        categoria = Categoria.objects.filter(pk=pk)
        serializer = CategoriaSerializer(categoria, many=True)
        return Response(serializer.data)

class ProdutoRegistrar(APIView):

    def post(self, request):
        produto = Produto.objects.all()
        serializer = ProdutoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.error)

class ProdutoEditar(APIView):

    def put(self, request, pk):
        produto = Produto.objects.get(pk=pk)
        serializer = ProdutoSerializer(produto,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.error)

class ProdutoEliminar(APIView):

    def delete(self, request,  pk):
        produto = Produto.get(pk=pk)
        produto.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ProdutoComDadosDaCategoriaAssociadoSerializer(APIView):

    def get(self, request):
        produto = Produto.objects.all()
        serializer = CategoriaSerializer(produto, many=True)
        return Response(serializer.data)

class CategoriaRegistrar(APIView):

    def post(self, request):
        categoria = Categoria.objects.all()
        serializer = CategoriaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.error)

class CategoriaEditar(APIView):

    def put(self, request, pk):
        categoria = Categoria.objects.get(pk=pk)
        serializer = CategoriaSerializer(categoria,data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.error)

class CategoriaEliminar(APIView):

    def delete(self, request,  pk):
        categoria = Categoria.get(pk=pk)
        categoria.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
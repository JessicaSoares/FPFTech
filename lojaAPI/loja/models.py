from django.db import models

# Create your models here.
class Categoria(models.Model):

    nome = models.CharField(max_length=250)
    def __str__(self):
        return self.nome

class Produto(models.Model):

    nome = models.CharField(max_length=250)
    categoria = models.ForeignKey(
        Categoria,
        on_delete=models.CASCADE,
        related_name='categoria'
    )
    def __str__(self):
        return self.nome
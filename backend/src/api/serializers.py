from rest_framework import serializers
from .models import Watchlist,Series
from django.contrib.auth.models import User
from drf_writable_nested import WritableNestedModelSerializer

class SeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Series
        fields = ('__all__')

class WatchlistSerializer(WritableNestedModelSerializer):
    class Meta:
        model = Watchlist
        fields = ('__all__')
    series = SeriesSerializer(many=True, allow_null=True)



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('__all__')
    
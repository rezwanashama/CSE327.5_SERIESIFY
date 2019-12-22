# from rest_framework.generics import ListAPIView,RetrieveAPIView
from .models import Watchlist, Series
from .serializers import WatchlistSerializer, SeriesSerializer, UserSerializer
from rest_framework import viewsets
from allauth.socialaccount.providers.facebook.views import FacebookOAuth2Adapter
from rest_auth.registration.views import SocialLoginView
from allauth.account.adapter import get_adapter
from django.contrib.auth.models import User
class WatchlistListView(viewsets.ModelViewSet):
    queryset = Watchlist.objects.all()
    serializer_class = WatchlistSerializer

class WatchlistDetailView(viewsets.ModelViewSet):
    queryset = Watchlist.objects.all()
    serializer_class = WatchlistSerializer

class SeriesListView(viewsets.ModelViewSet):
    queryset = Series.objects.all()
    serializer_class = SeriesSerializer

class SeriesDetailView(viewsets.ModelViewSet):
    queryset = Series.objects.all()
    serializer_class = SeriesSerializer

    


class FacebookLogin(SocialLoginView):
    adapter_class = FacebookOAuth2Adapter


    def process_login(self):
        get_adapter(self.request).login(self.request, self.user)



class UserViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        return User.objects.filter(pk=self.request.user.pk)
    serializer_class = UserSerializer

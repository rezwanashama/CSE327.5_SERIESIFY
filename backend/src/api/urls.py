from django.urls import path, include
from .views import WatchlistListView,WatchlistDetailView ,SeriesDetailView, SeriesListView ,UserViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register('watchlist', WatchlistListView,basename='watchlist')
router.register('watchlist/<int:pk>',WatchlistDetailView )
router.register('series', SeriesListView)
router.register('userv', UserViewSet,basename='currentUser')
router.register('serieslist/<pk>', SeriesDetailView)

urlpatterns = [
    path('', include(router.urls)),
]

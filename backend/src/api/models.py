from django.db import models
from django.contrib.auth.models import User

class Series(models.Model):
    name = models.CharField(max_length=200)
    tmd_id = models.CharField(max_length=100)
    poster_path = models.CharField(max_length=500)
    overview = models.CharField(max_length=1000)
    first_air_date = models.CharField(max_length=100)

    def __str__(self):
        return self.name



class Watchlist(models.Model):
    name = models.CharField(max_length=50)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    series = models.ManyToManyField(
        Series,
        related_name="watchlists",
        
    )

    def __str__(self):
        return self.name


# def add_series_to_watchlist(request):
#     watchlist = Watchlist.objects.get(
#         id=request.data["watchlist_id"],
#         user=request.user,
#     )
#     series, created = Series.objects.get_or_create(name=request.data["series_name"])
#     watchlist.series.add(series)
#     return Response()
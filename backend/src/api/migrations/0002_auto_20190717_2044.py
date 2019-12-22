# Generated by Django 2.2.1 on 2019-07-17 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Series',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
            ],
        ),
        migrations.RenameField(
            model_name='watchlist',
            old_name='watchlist_name',
            new_name='name',
        ),
        migrations.RenameField(
            model_name='watchlist',
            old_name='account_id',
            new_name='user',
        ),
        migrations.DeleteModel(
            name='Serieslist',
        ),
        migrations.AddField(
            model_name='watchlist',
            name='series',
            field=models.ManyToManyField(blank=True, related_name='watchlists', to='api.Series'),
        ),
    ]
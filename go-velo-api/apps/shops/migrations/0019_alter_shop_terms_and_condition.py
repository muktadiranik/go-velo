# Generated by Django 4.0.8 on 2023-02-19 13:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shops', '0018_shop_terms_and_condition'),
    ]

    operations = [
        migrations.AlterField(
            model_name='shop',
            name='terms_and_condition',
            field=models.TextField(blank=True, null=True),
        ),
    ]
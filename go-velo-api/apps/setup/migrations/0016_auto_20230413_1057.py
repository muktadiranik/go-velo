# Generated by Django 3.2.15 on 2023-04-13 10:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('setup', '0015_auto_20230411_0700'),
    ]

    operations = [
        migrations.AlterField(
            model_name='currency',
            name='code',
            field=models.CharField(blank=True, choices=[('$', 'USD'), ('€', 'EUR'), ('£', 'GBP'), ('৳', 'BDT'), ('₹', 'INR')], max_length=20, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='currency',
            name='symbol',
            field=models.CharField(blank=True, choices=[('USD', '$'), ('EUR', '€'), ('GBP', '£'), ('BDT', '৳'), ('INR', '₹')], max_length=20, null=True),
        ),
    ]

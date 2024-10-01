# Generated by Django 4.0.8 on 2023-02-07 10:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0023_alter_productstock_product'),
    ]

    operations = [
        migrations.RenameField(
            model_name='productsize',
            old_name='size',
            new_name='product_size',
        ),
        migrations.RemoveField(
            model_name='productsize',
            name='product',
        ),
        migrations.RemoveField(
            model_name='productsize',
            name='updated_at',
        ),
        migrations.AddField(
            model_name='product',
            name='condition',
            field=models.CharField(blank=True, max_length=100, null=True),
        ),
        migrations.AddField(
            model_name='product',
            name='size',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='products.productsize'),
        ),
    ]

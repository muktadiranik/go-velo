# Generated by Django 4.0.8 on 2023-02-07 09:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0010_rename_zipcode_shippingaddress_area_code_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='PaymentInformation',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('create_time', models.DateTimeField(blank=True, null=True)),
                ('update_time', models.DateTimeField(blank=True, null=True)),
                ('payment_id', models.CharField(blank=True, max_length=100, null=True)),
                ('intent', models.CharField(blank=True, max_length=100, null=True)),
                ('payer_country_code', models.CharField(blank=True, max_length=100, null=True)),
                ('payer_email', models.CharField(blank=True, max_length=100, null=True)),
                ('payer_id', models.CharField(blank=True, max_length=100, null=True)),
                ('payer_name', models.CharField(blank=True, max_length=100, null=True)),
                ('purchase_amount', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('purchase_currency_code', models.CharField(blank=True, max_length=100, null=True)),
                ('purchase_units_reference_id', models.CharField(blank=True, max_length=100, null=True)),
                ('purchase_shipping_address', models.JSONField(blank=True, null=True)),
                ('purchase_shipping_name', models.CharField(blank=True, max_length=100, null=True)),
                ('status', models.CharField(blank=True, max_length=100, null=True)),
                ('order', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='orders.order')),
            ],
        ),
    ]

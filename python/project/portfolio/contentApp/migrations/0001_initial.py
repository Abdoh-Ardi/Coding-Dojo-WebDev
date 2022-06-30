# Generated by Django 4.0.5 on 2022-06-29 22:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('loginAndRegistration', '0004_remove_user_id_alter_user_username'),
    ]

    operations = [
        migrations.CreateModel(
            name='Picture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.URLField()),
                ('title', models.CharField(max_length=255)),
                ('description', models.TextField()),
                ('createdAt', models.DateTimeField(auto_now_add=True)),
                ('publisher', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='publisher', to='loginAndRegistration.user')),
            ],
        ),
    ]

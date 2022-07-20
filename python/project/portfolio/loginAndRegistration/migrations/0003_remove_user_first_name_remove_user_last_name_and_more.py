# Generated by Django 4.0.5 on 2022-06-29 13:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loginAndRegistration', '0002_remove_user_username_user_created_at_user_email_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='first_name',
        ),
        migrations.RemoveField(
            model_name='user',
            name='last_name',
        ),
        migrations.AddField(
            model_name='user',
            name='fullName',
            field=models.CharField(default='', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='username',
            field=models.CharField(default='', max_length=255),
            preserve_default=False,
        ),
    ]
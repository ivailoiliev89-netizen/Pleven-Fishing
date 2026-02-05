from django.contrib import admin
from .models import FishingPlace, Method, Fish


@admin.register(FishingPlace)
class FishingPlaceAdmin(admin.ModelAdmin):
    list_display = ('name', 'place_type', 'region')
    prepopulated_fields = {'slug': ('name',)}
    filter_horizontal = ('methods', 'fishes')


admin.site.register(Method)
admin.site.register(Fish)

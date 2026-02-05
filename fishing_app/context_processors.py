from .models import Method, FishingPlace


def fishing_menu(request):
    return {
        'nav_methods': Method.objects.all(),
        'nav_rivers': FishingPlace.objects.filter(place_type='river'),
        'nav_lakes': FishingPlace.objects.filter(place_type='lake'),
        'nav_swamps': FishingPlace.objects.filter(place_type='swamp'),
    }

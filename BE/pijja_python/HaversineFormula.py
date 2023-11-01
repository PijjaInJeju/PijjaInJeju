import math

def distance_in_kilometer_by_haversine(x1, y1, x2, y2):
    radius = 6371  # 지구 반지름(km)
    to_radian = math.pi / 180

    delta_latitude = abs(x1 - x2) * to_radian
    delta_longitude = abs(y1 - y2) * to_radian

    sin_delta_lat = math.sin(delta_latitude / 2)
    sin_delta_lng = math.sin(delta_longitude / 2)
    square_root = math.sqrt(
        sin_delta_lat ** 2 +
        math.cos(x1 * to_radian) * math.cos(x2 * to_radian) * sin_delta_lng ** 2)

    distance = 2 * radius * math.asin(square_root)

    return distance

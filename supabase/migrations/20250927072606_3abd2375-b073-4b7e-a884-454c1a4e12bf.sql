-- Update flight dates to November 2025 - January 2026
UPDATE flights SET 
  departure_time = departure_time + INTERVAL '3 months',
  arrival_time = arrival_time + INTERVAL '3 months'
WHERE departure_time < '2025-11-01';
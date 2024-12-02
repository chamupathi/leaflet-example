import { renderHook, waitFor } from "@testing-library/react";
import useGeoLocationData from "./useGeoLocationData";

global.fetch = jest.fn();

describe("useGeoLocationData", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("when data is fetched successfully", () => {
        let mockedData;

        beforeEach(() => {
            mockedData = {
                elements: [
                    { id: 1, tags: { name: "Restaurant A" }, lat: 37.7749, lon: -122.4194 },
                    { id: 2, tags: { name: "Restaurant B" }, lat: 37.7750, lon: -122.4195 },
                ],
            };

            global.fetch.mockResolvedValue({
                'ok': true,
                json: jest.fn().mockResolvedValue(mockedData),
            });
        });

        it("should return data", async () => {
            const { result } = renderHook(() => useGeoLocationData(37.7749, -122.4194, 1000));

            await waitFor(() => {
                expect(result.current).toEqual({
                    locations: mockedData.elements,
                    error: null,
                    loading: false,
                })

                expect(fetch).toHaveBeenCalledTimes(1);
                expect(fetch).toHaveBeenCalledWith(
                    expect.stringContaining('around:1000,37.7749,-122.4194')
                );
            }

            );
        });

        it("should handle fetch errors gracefully", async () => {
            fetch.mockRejectedValueOnce(new Error('Network error'));


            const { result } = renderHook(() => useGeoLocationData(37.7749, -122.4194, 1000));

            await waitFor(() => {
                const { locations, loading, error } = result.current;

                expect(fetch).toHaveBeenCalledTimes(1);
                expect(locations).toEqual([]);
                expect(loading).toBe(false);
                expect(error).not.toBe(null);
                expect(error.message).toBe('Network error');
            }

            );
        });
        //     const mockedAbortController = {
        //       abort: jest.fn(),
        //     };

        //     beforeEach(() => {
        //       global.AbortController = jest.fn(() => mockedAbortController);
        //     });

        //     it("should abort the fetch request", async () => {
        //       const { unmount } = renderHook(() => useFetchedData());
        //       unmount();

        //       expect(mockedAbortController.abort).toHaveBeenCalled();
        //     });
    });
});
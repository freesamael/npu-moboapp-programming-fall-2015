package idv.samael.mrtapproachingstations;

import com.google.gson.annotations.SerializedName;

import java.util.List;

/**
 * Created by freesamael on 11/14/15.
 */
public class ApproachingTrains {
    public static class TrainInfo {
        @SerializedName("Station")
        public String station;

        @SerializedName("Destination")
        public String destination;
    }

    public static class ApproachingTrainsResult {
        @SerializedName("count")
        public int count;

        @SerializedName("results")
        public List<TrainInfo> results;
    }

    @SerializedName("result")
    public ApproachingTrainsResult result;
}

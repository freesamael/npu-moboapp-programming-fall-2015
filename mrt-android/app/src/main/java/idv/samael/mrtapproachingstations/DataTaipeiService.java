package idv.samael.mrtapproachingstations;

import retrofit.Call;
import retrofit.http.GET;

/**
 * Data.Taipei service interface for Retrofit.
 */
public interface DataTaipeiService {

    /**
     * List all approaching MRT trains.
     */
    @GET("opendata/datalist/apiAccess?scope=resourceAquire&rid=55ec6d6e-dc5c-4268-a725-d04cc262172b")
    Call<ApproachingTrains> listApproachingTrains();
}

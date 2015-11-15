package idv.samael.mrtapproachingstations;

import retrofit.Call;
import retrofit.http.GET;

/**
 * Created by freesamael on 11/8/15.
 */
public interface DataTaipeiService {

    @GET("opendata/datalist/apiAccess?scope=resourceAquire&rid=55ec6d6e-dc5c-4268-a725-d04cc262172b")
    Call<ApproachingTrains> listApproachingTrains();
}

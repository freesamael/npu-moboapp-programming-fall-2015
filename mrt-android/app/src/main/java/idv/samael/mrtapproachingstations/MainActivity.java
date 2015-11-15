package idv.samael.mrtapproachingstations;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.widget.ListView;

import com.google.gson.Gson;

import retrofit.Call;
import retrofit.Callback;
import retrofit.GsonConverterFactory;
import retrofit.Response;
import retrofit.Retrofit;

public class MainActivity extends AppCompatActivity {
    private TrainInfoAdapter mAdapter;
    private DataTaipeiService mService;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Bind list view.
        ListView trainList = (ListView) findViewById(R.id.list_mrt);
        mAdapter = new TrainInfoAdapter(this);
        if (trainList != null) {
            trainList.setAdapter(mAdapter);
        }

        // Create web service wrapper.
        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl("http://data.taipei")
                .addConverterFactory(GsonConverterFactory.create())
                .build();
        mService = retrofit.create(DataTaipeiService.class);

        // Refresh immediately.
        refresh();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater inflater = getMenuInflater();
        inflater.inflate(R.menu.main, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        switch (item.getItemId()) {
            case R.id.action_refresh:
                refresh();
                return true;

        }
        return super.onOptionsItemSelected(item);
    }

    private void refresh() {
        // Clear old data.
        mAdapter.getItems().clear();
        mAdapter.notifyDataSetChanged();

        // Update train info.
        Call<ApproachingTrains> trainsCall = mService.listApproachingTrains();
        trainsCall.enqueue(new Callback<ApproachingTrains>() {
            @Override
            public void onResponse(Response<ApproachingTrains> response, Retrofit retrofit) {

                // Fill the list view.
                for (ApproachingTrains.TrainInfo trainInfo : response.body().result.results) {
                    mAdapter.getItems().add(trainInfo);
                }
                mAdapter.notifyDataSetChanged();
            }

            @Override
            public void onFailure(Throwable t) {
                Log.e("Data.Taipei", t.getMessage(), t);
            }
        });
    }
}
